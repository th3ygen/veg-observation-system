import { useEffect, useState, useRef } from "react";
import { SVG } from "@svgdotjs/svg.js";

import styles from "./GrowthChart.module.scss";

export default function GrowthChart(props) {
    const drawRef = useRef(null);

    const row = 10;
    const col = 30;

    const [draw, setDraw] = useState();
    const [camHeight, setCamHeight] = useState();
    const [camWidth, setCamWidth] = useState();

    useEffect(() => {
        const d = SVG().addTo(drawRef.current).size(props.width, props.height);

        for (let x = 0; x < col; x++) {
            for (let y = 0; y < row; y++) {
                d.circle(15).move((x * (props.width)/col) + 7.5, (y * props.height/row) + 7.5).fill("#000");
            }
        }

        setDraw(d);
    }, [props.height, props.width]);

    // on data update
    useEffect(() => {
                                                                                                                                                
    }, [props.data])

	return (
		<>
			<div ref={drawRef} className={styles.container}>

            </div>
		</>
	);
}
