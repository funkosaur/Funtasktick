import './styles/style.css';
import formPage from "./pages/formPage.js";
import {takeFormInfo, projects} from "./functions/takingFormInfo.js";
import addProjectToNavlist from "./functions/createProject.js";
import events from "./functions/pubsub.js";


formPage()
takeFormInfo()
addProjectToNavlist()

