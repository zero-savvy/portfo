import { useState, useEffect } from 'react';
import { useProjects } from '../../context/ProjectsContext';
import Project from './ProjectCard';
import './projects.scss';

function Projects() {
    const { loading, projects } = useProjects();
    const dataLimit = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('stars'); // 'stars' or 'updated'
    const [sortedProjects, setSortedProjects] = useState([]);
    const pagesCount = Math.ceil((sortedProjects && sortedProjects.length) / dataLimit);

    // Update sorted projects when sort criteria or projects change
    useEffect(() => {
        if (!projects) return;
        
        const sorted = [...projects].sort((a, b) => {
            if (sortBy === 'stars') {
                return b.stargazers_count - a.stargazers_count;
            } else {
                return new Date(b.pushed_at) - new Date(a.pushed_at);
            }
        });
        setSortedProjects(sorted);
        setCurrentPage(1); // Reset to first page when sort changes
    }, [projects, sortBy]);

    function goToNextPage() {
        setCurrentPage(page => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage(page => page - 1);
    }

    function changePage(ev) {
        const pageNumber = Number(ev.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return sortedProjects.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        return new Array(pagesCount).fill().map((_, idx) => 0 + idx + 1);
    };

    console.log(loading, projects, pagesCount);

    return (
        <section id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h1 className="projects-title">Main Projects</h1>
                    <select 
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value)}
                        className="sort-select"
                    >
                        <option value="stars">Sort by Stars</option>
                        <option value="updated">Sort by Latest Updates</option>
                    </select>
                </div>
                <div className="projects-list">
                    {sortedProjects &&
                        getPaginatedData().map((project, idx) => (
                            <Project project={project} key={idx} />
                        ))}
                </div>
                <div className="pagination">
                    {/* previous button */}
                    <button
                        onClick={goToPreviousPage}
                        className="prev"
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                    {/* show page numbers */}
                    {getPaginationGroup().map((item, index) => (
                        <button
                            key={index}
                            onClick={changePage}
                            className={`paginationItem ${
                                currentPage === item ? 'active' : null
                            }`}
                        >
                            <span>{item}</span>
                        </button>
                    ))}
                    {/* next button */}
                    <button
                        onClick={goToNextPage}
                        className="next"
                        disabled={currentPage === pagesCount}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;
