import AboutTimeline from "./aboutTimeline";
import Collapse from "./collapse";

export default function AboutCard({title, content}) {
    return (
        <Collapse title = {title}>
            <AboutTimeline content = {content} />
        </Collapse>
    )
}