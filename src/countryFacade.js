//Add imports here

import {useState, useEffect} from "react";

const [labels, setLables] = useState(null)
const [country, setCountry] = useState(null)

/*useEffect(() => {
  fetch("http://localhost:3333/labels")
      .then(res => {
        return res.json()
      })
      .then(data => {

      })

},[]);*/

const countryFacade = () => {


  const getLabels = () => {
    //TODO: Get Labels from server
    fetch("http://localhost:3333/labels")
        .then((res) => res.json())
        .then((res) => {
          setLables(res)
        })
  }
  useEffect(() => {
    getLabels()
  }, [])

  const getCountries = () => {
    //TODO: Get Countries from server

  }
  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade();