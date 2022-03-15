import React, { useState }  from 'react';
import { Navigate } from 'react-router-dom';

//creates individual card
export function Card(props) {
    //create modal for card popup
    const [showModal, setshowModal] = useState(''); 
    const [expand, setExpand] = useState(false);
    function getModal(value){
        setshowModal(value);
        setExpand(prevCheck => !prevCheck);
    }

    function hideModal(){
        setshowModal('');
        setExpand(false);
    }

    function showDisableButton() {
        if(expand) {
           return  <button onClick={hideModal}></button>
        } else {
            return null
        }
    }

    return (
        <div>
            <div className="card">
                <img src={"../"+props.members.img} alt={props.members.name} style={{width:'100%'}}/>
                <h2>{props.members.name}</h2>
                <p className="major">{props.major}</p>
                <a href={props.members.linkedin}><button  type="button" className="btn btn-dark">LinkedIn</button></a>
                <div className="box" onClick={() => getModal(props.members.name)}>
                    <button aria-label="hoverButton" className="buttonPopup" >Click here to learn more!</button>
                </div>
                <div>
                    {/* <button onClick={hideModal}></button> */}
                    {showDisableButton()}
                    <Modal
                        show = {showModal === props.members.name}
                        popup={props.members.popup}
                    />
                </div>
            </div>
        </div>
    )
}

//create popup for the member card
export function Modal(props){
    let x 
    if(props.show === false){
        x = "d-none"
    }
    return(
        <div>
            <div onClick={props.hide} className={x}>
                <div className="popup">
                        <div className="content">
                        {props.popup}
                        </div>
                    </div>
                </div>
        </div>
    )
}

//returns the enrtire member page 
export default function Member({memberData}) {
    const [selectedClass, setSelectedClass] = useState(''); 
    var filteredData = '';
    if (selectedClass === '') {
        filteredData = memberData;
    } else {
        filteredData = memberData.filter(data => data.class===selectedClass);
    }

    let memberCards = (filteredData.map((member) => {
      return (<Card className="card" members={member} key={member.name} memberData={memberData}/>);
  })
  );

    //set states for redirect link
    const [redirectTo, setRedirectTo] = useState(undefined);

    //handle select
    const changeSelect = (event) => {
        let selectedValue = event.target.value;
        setSelectedClass(selectedValue);
        setRedirectTo(selectedValue);
    }
    
    //handle redirect
    if(redirectTo) {
      return <Navigate push to={'/members/' + redirectTo}/>;
    }

    //extract only selected pledge class from data 
    const classList = {};
    memberData.filter(function(eachClass) {
    if (classList[eachClass.class]) {
        return false;
    }
    classList[eachClass.class] = true;
        return true;
    });
    const uniqueClasses = Object.keys(classList);
    const optionElemArray = uniqueClasses.map((classString) => {
        return <option value={classString} key={classString}>{classString}</option>
        // return <option value={classString}>{classString}</option>
    });

 
    return (
        <div>
            <main>
                <section>
                    <div className="brother-filter justify-content-center"><h1 className="brother-title">Our Brothers</h1>
                        <p className="filter-description">Using the filter below, select the pledge class to view Rho Chapter Active members.</p>
                        <div className="dropdown">
                            <label htmlFor="pledge class" className='class-selection-label'>Select Plege Class</label>
                            <select className="Pledge Class " id="PledgeClass" value={selectedClass} onChange={changeSelect} >
                                <option value="">Show All Classes</option>
                                {optionElemArray}    
                            </select>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container"> 
                        <div className="row">
                        {memberCards}
                        </div>
                    </div>  
                </section>
             </main>
        </div>
    );
}