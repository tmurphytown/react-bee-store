import { Row } from "react-bootstrap"

function AboutUs (){

    return(

<div style={{padding:10}}>
<Row xs={1} md={2} className="g-4">
    <img 
    src="assets/BeeKeepers.jpg" 
    className= "w-50 shadow p-3 mb-5 bg-white rounded"
    />
    <div>
            <h1 className="text-center">About Us</h1>
    <p className="text-center">Beeloved is a small, family-owned beekeeping supply and decor business in the quaint city of Snohomish, WA <br/>
    about 40 minutes north of Seattle. Our journey with Beloved began in October of 2022 and has been an amazing and<br/>
    exciting experience serving and working with an incredible community of all things pollination.</p><br/>
    <p className="text-center">Beeloved is a luxury gift shop that celebrates Earth's most precious pollinator. <br/>
        From gourmet honey to bee themed home decor,<br/>
        we offer a wide selection of specialty items for the kitchen, home and jewelry.</p>
        </div>
        </Row>
</div >
    )
}

export default AboutUs

