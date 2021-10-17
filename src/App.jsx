import { Introduccion } from './components/introducción/Introduccion';
import './app.css';
import Sidebar from './components/sidebar/sidebar';
import { SkillsList } from './components/skills/SkillsList';
import { Portfolio } from './components/portfolio/Portfolio';

function App () {

    return (
        <div>
            <main>
                <Introduccion />
                <SkillsList />
                <Portfolio />
                <Sidebar />
            </main>
        </div>
    );

}

export default App;
