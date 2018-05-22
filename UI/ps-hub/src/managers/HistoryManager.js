//@flow
import { createBrowserHistory as createHistory } from "history";

class HistoryManager {
    history: Object;
    // eslint-disable-next-line
    constructor() {
        this.history = createHistory();
    }

    pushRoute(url: string, props: historyPropType) {
        props.history.push(url);
    }
}
const historyManager = new HistoryManager();
export default historyManager;