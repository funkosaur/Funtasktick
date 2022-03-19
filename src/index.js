import './styles/style.css';
import formPage from "./pages/formPage.js";
import { processFormInfo, projects} from "./functions/takingFormInfo.js";


formPage()
const form = document.querySelector("#formContent");
form.addEventListener("submit", processFormInfo);
