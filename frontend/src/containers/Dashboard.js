import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {get_sightings} from "../actions/sightings"
const Dashboard = ({
    get_sightings,
    // get_items,
    // get_total,
    // get_item_total,
    // list_orders,
    // orders,
    user,
    // profile,
    sightingss,
    // get_user_profile,
    // update_user_profile,
  }) => {
    // const [display, setDisplay] = useState("user_info");
    const [formData, setFormData] = useState({
      address_line_1: "",
      address_line_2: "",
      city: "",
      state_province_region: "",
      zipcode: "",
      phone: "",
      country_region: "Canada",
    });
    console.log(sightingss)

    const [page, setPage] = useState(1)

    useEffect(() => {
      get_sightings();
    }, []);
  
    const {
      // address_line_1,
      // address_line_2,
      // city,
      // state_province_region,
      // zipcode,
      // phone,
      // country_region,
    } = formData;
  
    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      // update_user_profile(
      //   address_line_1,
      //   address_line_2,
      //   city,
      //   state_province_region,
      //   zipcode,
      //   phone,
      //   country_region
      // );
  
      window.scrollTo(0, 0);
    };
  
    // useEffect(() => {
    //   get_user_profile();
    // }, []);
  
    // useEffect(() => {
    //   if (user) {
    //     get_items();
    //     get_total();
    //     get_item_total();
    //     list_orders();
    //   }
    // }, [user]);
  
    // useEffect(() => {
    //   if (profile && profile !== null && profile !== undefined) {
    //     setFormData({
    //       address_line_1: profile.address_line_1,
    //       address_line_2: profile.address_line_2,
    //       city: profile.city,
    //       state_province_region: profile.state_province_region,
    //       zipcode: profile.zipcode,
    //       phone: profile.phone,
    //       country_region: profile.country_region,
    //     });
    //   }
    // }, [profile]);
  
    // const showStatus = (status) => {
    //   if (status === "not_processed") {
    //     return "Not Processed";
    //   } else if (status === "processed") {
    //     return "Processed";
    //   } else if (status === "shipping") {
    //     return "Shipping";
    //   } else if (status === "delivered") {
    //     return "Delivered";
    //   } else if (status === "cancelled") {
    //     return "Cancelled";
    //   }
    // };
    // console.log(state)
  
    const userInfo = () => {
      return (
        <div className="card mb-5">
          <h3 className="card-header">User Information</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>First Name: </strong>
              {user && user !== null && user !== undefined ? (
                user.first_name
              ) : (
                <Fragment></Fragment>
              )}
            </li>
            <li className="list-group-item">
              <strong>Last Name: </strong>
              {user && user !== null && user !== undefined ? (
                user.last_name
              ) : (
                <Fragment></Fragment>
              )}
            </li>
            <li className="list-group-item">
              <strong>Email: </strong>
              {user && user !== null && user !== undefined ? (
                user.email
              ) : (
                <Fragment></Fragment>
              )}
            </li>
          </ul>
        </div>
      );
    };
  
    const purchaseHistory = () => {
      return (
        <div className="card mb-5">
          <h3 className="card-header">Purchase History</h3>
          <div className="card-body">
            hola
          </div>
        </div>
      );
    };
  
    // const userProfile = () => {
    //   if (profile && profile !== null && profile !== undefined) {
    //     return (
    //       <UserProfileForm
    //         address_line_1={address_line_1}
    //         address_line_2={address_line_2}
    //         city={city}
    //         state_province_region={state_province_region}
    //         zipcode={zipcode}
    //         phone={phone}
    //         country_region={country_region}
    //         onChange={onChange}
    //         onSubmit={onSubmit}
    //         profile={profile}
    //       />
    //     );
    //   } else {
    //     return <Fragment></Fragment>;
    //   }
    // };
  
    const renderData = () => {
      // if (display === "user_info") {
      //   return <Fragment>{userInfo()}</Fragment>;
      // } else if (display === "profile_info") {
      //   return <Fragment>{userProfile()}</Fragment>;
      // } else if (display === "purchase_history") {
      //   return <Fragment>{purchaseHistory()}</Fragment>;
      // }
      <p>Hola</p>
    };
  
    return (
      <div className="container mt-5">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Aplicacion para amantes de los vinos"
          />
          <title>Shop Time | Dashboard</title>
          {/*<link rel="canonical" href="http://mysite.com/activate" /> */}
        </Helmet>
        <div className="row">
          <h1>iniciaste sesion</h1>
        </div>
      </div>
    );
  };
  
const mapStateToProps = (state) => ({
  user: state.auth.user,
  sightingss: state.sightings.items
});
  
export default connect(mapStateToProps, {
  // get_items,
  // get_total,
  // get_item_total,
  // list_orders,
  // get_user_profile,
  // update_user_profile,
  get_sightings
})(Dashboard);
  