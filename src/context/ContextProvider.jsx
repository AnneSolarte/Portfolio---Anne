import React, { useEffect, useState } from 'react'
import { Context } from './context'
import PropTypes from 'prop-types'
import { getProjects } from '../services/firebase'
import { toast } from 'react-toastify'

export const ContextProvider = ({ children }) => {
  const userState = localStorage.getItem('user')
  const [userIsLogged, setuserIsLogged] = useState(userState || false)
  const [hiddenBar, setHiddenBar] = useState(false)
  const [formData, setFormData] = useState({})
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const logInUser = () => {
    setuserIsLogged(true)
    localStorage.setItem('user', true)
  }

  const logOutUser = () => {
    setuserIsLogged(false)
    localStorage.setItem('user', false)
    toast.info('Logging out', {
      position: 'bottom-center',
      theme: 'colored'
    })
  }

  useEffect(() => {
    setLoading(true)
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const savedProjects = await getProjects()
      const initialProjects = savedProjects || []
      setProjects(initialProjects)
      console.log('Projects tradídos en fetch')
      setLoading(false)
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  const changeNavBar = (type) => {
    if (type === 'show') {
      setHiddenBar(false)
    } else if (type === 'hidden') {
      setHiddenBar(true)
    }
  }

  const changeState = (type) => {
    setuserIsLogged(type)
  }

  const filteredProjects = projects.filter(project => {
    if (selectedFilter === 'all') {
      return true
    }
    console.log('filter', selectedFilter)
    console.log('filtered', project.categories[selectedFilter])
    console.log('projects in filter', projects)
    return project.categories[selectedFilter]
  })

  const changeSelectedFilter = (e) => {
    const filterValue = e.target.value
    setSelectedFilter(filterValue)
  }

  return (
    <Context.Provider value={{
      setuserIsLogged,
      userIsLogged,
      hiddenBar,
      changeNavBar,
      changeState,
      selectedFilter,
      filteredProjects,
      changeSelectedFilter,
      formData,
      setFormData,
      projects,
      logInUser,
      logOutUser,
      loading,
      fetchProjects
    }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}
