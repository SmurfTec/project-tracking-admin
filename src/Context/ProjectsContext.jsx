import React, { createContext, useEffect, useState } from 'react';
import { makeRequest } from 'src/utils/constants';
import { useAuth } from './AuthContext';

// Create the ProjectsContext
export const ProjectsContext = createContext();

// Create the ProjectsProvider component
export const ProjectsProvider = ({ children }) => {
  // State to hold the projects data
  const [projects, setProjects] = useState([]);
  const [projectStats, setProjectStats] = useState('Loading...')
  const {user} = useAuth();

  const createNewProject = async (data,successCallback) => {
    try {
      const res = await makeRequest('/projects', 'POST', data);
      setProjects([ res.data.project,...projects]);
      successCallback();
    }    
    catch (error) {
      console.error(error);
    }
  };


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
      const data = res.data.projects
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(!user) return;
    getAllProjects();
    getProjectStats();
  }, [user]);

  return (
    <ProjectsContext.Provider value={{ projects,projectStats,createNewProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => React.useContext(ProjectsContext);