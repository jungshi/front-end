import React, { Component } from "react";
import * as d3 from "d3";
import moment from "moment";
import "./timespanpicker.css";
const config = {
  labelsPAdding: 13,
};

class CircularTimespanpicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    let { outerRadius, innerRadius, interval, boundaryHour } = this.props;

    outerRadius =
      !outerRadius || isNaN(Number(outerRadius)) ? 150 : Number(outerRadius);
    innerRadius =
      !innerRadius || isNaN(Number(innerRadius) || innerRadius > outerRadius)
        ? outerRadius / 1.4
        : Number(innerRadius);
    interval =
      interval &&
      Number.isInteger(Number(interval)) &&
      Number(interval) <= 60 &&
      !(60 % Number(interval))
        ? Number(interval)
        : 30;

    const width = outerRadius * 2 + 60;
    const segmentsInHour = 60 / interval;
    const totalNumberOfSegments = 1440 / interval;

    const pie = d3
      .pie()
      .sort(null)
      .value((d) => 1);
    const segmentsArray = pie(new Array(totalNumberOfSegments));
    const hoursLabelsArray = pie(new Array(24));
    console.log(hoursLabelsArray);
    const colorScale = d3
      .scaleOrdinal()
      .domain([0, 1, 2])
      .range(["#bbb", "#ddd"]);
    const segmentsArcFn = d3
      .arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);
    const minutesArcFn = d3
      .arc()
      .outerRadius(outerRadius + config.labelsPAdding)
      .innerRadius(outerRadius + config.labelsPAdding)
      .startAngle((d) => d.startAngle + Math.PI / totalNumberOfSegments)
      .endAngle((d) => d.endAngle + Math.PI / totalNumberOfSegments);
    const hoursArcFn = d3
      .arc()
      .outerRadius(outerRadius + config.labelsPAdding)
      .innerRadius(outerRadius + config.labelsPAdding)
      .startAngle((d) => d.startAngle - 0.26)
      .endAngle((d) => d.endAngle - 0.26);

    const configObject = {
      interval,
      boundaryHour,
      width,
      segmentsInHour,

      segmentsArcFn,
      minutesArcFn,
      hoursArcFn,
      segmentsArray,
      hoursLabelsArray,
      colorScale,
      innerRadius,
      outerRadius,
      totalNumberOfSegments,
    };
    this.setState({ configObject });
  }
  handleClick(clickedValue, isEntered) {
    if (isEntered && !this.state.configObject.mouseIsClickedDown) return;
    const { configObject, ...segments } = this.state;
    const { boundaryHour, onClick } = this.props;
    const segmentPreviousValue = segments[clickedValue[1]];
    console.log(segmentPreviousValue);
    var segmentCurrentValue = {
      [String(clickedValue[1])]: segmentPreviousValue
        ? null
        : [
            moment()
              .set("hour", boundaryHour)
              .set("minute", 0)
              .minute(clickedValue[0]),
            moment()
              .set("hour", boundaryHour)
              .set("minute", 0)
              .minute(clickedValue[1]),
          ],
    };
    console.log(segmentCurrentValue, clickedValue, boundaryHour);
    console.log(segmentCurrentValue, typeof segments);
    const firstHour =
      segments !== undefined && segments !== null
        ? segments[Object.keys(segments[0])]
        : "";
    console.log(firstHour);
    this.setState(segmentCurrentValue);
    onClick({ ...segments, ...segmentCurrentValue });
  }

  getReducedArray(state) {
    const keysArr = Object.keys(state).filter(
      (key) => key !== "configObject" && state[key]
    );
    if (keysArr.length) {
      if (keysArr.length === 1) return [state[keysArr[0]]];
      let reducedArr = keysArr.reduce((prev, currentKey) => {
        let tempArr = Array.isArray(prev) ? prev : [state[prev]],
          lastElement = tempArr[tempArr.length - 1],
          currentElement = state[currentKey];

        if (!currentElement[0].diff(lastElement[1], "minutes")) {
          tempArr[tempArr.length - 1] = [lastElement[0], currentElement[1]];
        } else {
          tempArr.push(currentElement);
        }
        return tempArr;
      });
      return reducedArr;
    }
    return keysArr;
  }

  getBoundaryRotate() {
    let { boundaryHour } = this.state.configObject;
    return 30 * boundaryHour;
  }

  defineValue(index) {
    const {
      interval,
      boundaryHour,
      totalNumberOfSegments,
      segmentsInHour,
      isPostMeridiem,
    } = this.state.configObject;
    index = isPostMeridiem ? index + totalNumberOfSegments : index;
    const boundaryIndex = boundaryHour * segmentsInHour;
    const recalculatedIndex = index - boundaryIndex;
    const startMinutes = recalculatedIndex * interval;
    return [startMinutes, startMinutes + interval];
  }
  handleClickDown(mouseIsClickedDown) {
    const { configObject } = this.state;
    this.setState({ configObject: { ...configObject, mouseIsClickedDown } });
  }

  render() {
    if (!this.state.configObject) return null;
    const { showResults } = this.props;
    const {
      interval,
      boundaryHour,
      width,
      segmentsInHour,
      segmentsArcFn,
      minutesArcFn,
      hoursArcFn,
      segmentsArray,
      hoursLabelsArray,
      colorScale,
      outerRadius,
      innerRadius,
    } = this.state.configObject;
    console.log(hoursLabelsArray);
    return (
      <div
        className="timepickerwrapper"
        onMouseDown={() => {
          this.handleClickDown(true);
        }}
        onMouseUp={() => {
          this.handleClickDown(false);
        }}
        onMouseLeave={() => {
          this.handleClickDown(false);
        }}
      >
        <svg width={width} height={width}>
          <g transform={`translate(${width / 2},${width / 2})`}>
            {segmentsArray.map((item, index) => (
              <Segment
                key={index}
                index={index}
                item={item}
                segmentArcFn={segmentsArcFn}
                minutesArcFn={minutesArcFn}
                label={((index % segmentsInHour) + 1) * interval}
                fill={colorScale(Math.floor(index / segmentsInHour) % 2)}
                value={this.defineValue(index)}
                handleClick={this.handleClick.bind(this)}
                isActive={this.state[this.defineValue(index)[1]]}
                index={index}
              />
            ))}
            <g className="hoursLabelsGroup">
              {hoursLabelsArray.map((item, index) => (
                <text
                  key={index}
                  className={`hourLabel${"hi"}`}
                  transform={`translate(${hoursArcFn.centroid(item)})`}
                  dy=".35em"
                  style={{ textAnchor: "middle" }}
                ></text>
              ))}
            </g>
            <g className="boundaryGroup"></g>
          </g>
        </svg>
        {showResults ? (
          <TimeResults results={this.getReducedArray(this.state)} />
        ) : null}
      </div>
    );
  }
}

function TimeResults(props) {
  const { results } = props;
  return results.length ? (
    <div className="results">
      <h6>Selected Time</h6>
      {results.map((segment, n) =>
        segment.length ? (
          <p key={n}>
            {segment[0].format("H:mm")} - {segment[1].format("H:mm")}
          </p>
        ) : null
      )}
    </div>
  ) : null;
}

function Segment(props) {
  const {
    item,
    segmentArcFn,
    minutesArcFn,
    label,
    fill,
    value,
    handleClick,
    isActive,
    index,
  } = props;
  return (
    <g
      className={`segment${isActive ? " active" : ""}`}
      onClick={() => {
        handleClick(value);
      }}
      onMouseDown={() => {
        handleClick(value, true);
      }}
    >
      <path
        d={segmentArcFn(item)}
        fill={fill}
        onMouseLeave={() => {
          handleClick(value, true);
        }}
        onDragLeave={() => {
          handleClick(value, true);
        }}
        onMouseDown={() => {
          handleClick(value, true);
        }}
      />
      {label === 60 ? null : (
        <text
          className="minuteLabel"
          transform={`translate(${minutesArcFn.centroid(item)})`}
          dy=".35em"
        >
          {label}
        </text>
      )}
    </g>
  );
}

export default CircularTimespanpicker;
