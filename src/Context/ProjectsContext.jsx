import React, { createContext, useEffect, useState } from 'react';
import { makeRequest } from 'src/utils/constants';

// Create the ProjectsContext
export const ProjectsContext = createContext();

// Create the ProjectsProvider component
export const ProjectsProvider = ({ children }) => {
  // State to hold the projects data
  const [projects, setProjects] = useState([]);
  const [projectStats, setProjectStats] = useState('Loading...')


  const getProjectStats = async () => {
    try {
      const res = await makeRequest('/projects/stats' , 'GET');
      const data = res.data.stats
      setProjectStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllProjects = async () => {
    try {
      const res = await makeRequest('/projects' , 'GET');
      const data = res.data
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProjects();
    getProjectStats();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects,projectStats }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => React.useContext(ProjectsContext);