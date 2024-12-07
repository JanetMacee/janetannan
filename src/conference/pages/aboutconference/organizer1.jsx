import organizerDetails from './organizerDetails.json'
import './organizers.css'
const Organizer1=()=>{
    const {name,title,bio,image}=organizerDetails[0]
    return(
        <>
        <div className='organizer-Details mt-10'>
            <div className='organizer-name text-center font-bold text-2xl capitalize'>
                <h1>{name}</h1>
            </div>
            <div className='organizer-title text-center font-bold capitalize'>
                <h2>{title}</h2>
            </div>
            <div className=''>
                <img src={image}alt='organizer1-image'className='organizers-image mx-auto shadow-lg'/>
            </div>
            <div className='organizer-bio'>
                <p className='text-center font-bold opacity-70 mx-40'>{bio}</p>
            </div>
        </div>
        </>
    )
}
export default Organizer1