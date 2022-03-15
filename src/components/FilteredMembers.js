import { useParams, Link } from 'react-router-dom';
import { Card } from './Member.js'; 

//filter out member data according to the user input for drop down and also change the path parameter accordingly
export default function FilteredMembers(props) {
    //set up path param based on filtered data
    const urlParams = useParams();
    let selectedClassId = urlParams.selectedClassId;

    var filteredData = '';
    if (selectedClassId === '') {
        filteredData = props.memberData;
    } else {
        filteredData = props.memberData.filter(data => data.class===selectedClassId);
    }

    //crate member cards
    let memberCards = (filteredData.map((member) => {
        return (<Card className="card" members={member} key={member.name} memberData={props.memberData}/>);
    })
    );

    return (
        <div>
            <main>
            <section>
                <div className="brother-filter justify-content-center"><h1 className="brother-title">Our Brothers</h1> 
                    <Link to="/members">
                        <div className="backButton">
                            <button type="button" className= "btn btn-dark text-nowrap">Back</button>
                        </div>
                    </Link>
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