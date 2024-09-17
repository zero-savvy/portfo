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
        const filterProjects = ({ data: projects }) => {
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
                axios.get('https://api.github.com/orgs/zero-savvy/repos').then(res => {
                    setProjects(filterProjects(res));
                    setLoading(false);
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
