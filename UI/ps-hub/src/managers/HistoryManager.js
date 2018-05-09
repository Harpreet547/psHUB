import { createBrowserHistory as createHistory } from "history";

class HistoryManager {
    // eslint-disable-next-line
    constructor() {
        this.history = createHistory();
    }

    pushRoute(url, props) {
        props.history.push(url);
    }
}
const historyManager = new HistoryManager();
export default historyManager;