import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {get_sightings, get_more_sightings} from "../actions/sightings"
const Home = ({
    get_sightings,
    get_more_sightings,
    sightings,
    state
}) => {

    const [page, setPage] = useState(1)
    const [newPage, setNewPage] = useState(1)
    const [sighting, setSighting] = useState()
    useEffect(() => {
        get_sightings(page);
      }, []);
    //   useEffect(() =>{
    //       const p = state.sightings[1]
    //       console.log(p)
    //   }, [state])
    //   console.log(state)
    //   console.log(state.sightings[1])

    //   if(state.sightings[1]){
    //       console.log(state.sightings[1])
    //   }
      if(sightings[1]){
          console.log(sightings[1])
        //   setSighting(sightings[1])
          console.log(sighting)
      }
    console.log(sightings)
    async function clickhandle(){
        // setPage((state) => {return state+1})
        // await get_more_sightings(page)

        setNewPage(page+1)
        setPage(page+1)
    }
    async function clickdos(){
        setPage(page-1)
    }
    //if there is a sighting to whiche there is no page it loads more sightings with the page
    useEffect(()=>{
        if(!sightings[page]){
            get_more_sightings(page)
        }
    }, [page])
    // it set sighting to the current page sightings
    useEffect(()=>{
        setSighting(sightings[page])
        console.log(sighting)
    }, [sightings,page])
    return (<><div onClick={clickhandle}>siguiente</div> <div onClick={clickdos} >anterior</div>
    {/* {sightings && <div>pp</div>} */}
    {sighting && <div>{sighting.page} alo{sighting.results[0].description}</div>}
    {/* {sightings ? {sightings[1].next} : <div>no</div>} */}
        {/* <div>

            {sightings ? (
                sightings.map((sighting) => {
                    console.log(sighting)
                    return <p>alo</p>
                })
            ) : <p>alo2</p>}
        </div> */}
        </>)
}

const mapStateToProps = (state) => ({
    // sighting,
    state: state,
    // orders: state.orders.orders,
    user: state.auth.user,
    // profile: state.profile.profile,
    sightings: state.sightings
  });
  

export default connect(mapStateToProps, {
    get_sightings,
    get_more_sightings
  })(Home);