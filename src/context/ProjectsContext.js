import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsContext = createContext();

export function useProjects() {
    return useContext(ProjectsContext);
}

function ProjectsContextProvider({ children }) {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const filterProjects = (projects) => {
            const blocklist = ['.github', 'zero-savvy.github.io', 'zero-savvy', 'portfo'];
            return projects.filter(({ archived, disabled, fork, id, name }, idx) => {
                if (!archived && !disabled && !fork && !blocklist.includes(name)) {
                    return true;
                }
                return false;
            });
        };

        const fetchProjects = () => {
            try {
                axios.get('https://api.github.com/orgs/zero-savvy/repos').then(zeroSavvyProjects => {
                    axios.get('https://api.github.com/orgs/worm-privacy/repos').then(wormProjects => {
                        setProjects(filterProjects(zeroSavvyProjects['data'].concat(wormProjects['data'])));
                        setLoading(false);
                    });
                });
                
            } catch (err) {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const values = {
        projects,
        loading,
    };

    return <ProjectsContext.Provider value={values}>{children}</ProjectsContext.Provider>;
}

export default ProjectsContextProvider;
