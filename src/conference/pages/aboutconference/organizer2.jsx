import oraganizerDetails from './organizerDetails.json'
import './organizers.css'
const Organizer2=()=>{
    const {name,image,title,bio}=oraganizerDetails[1]
    return(
        <>
        <div className='mt-10'>
            <div className='text-2xl text-center font-bold'>
                <h1>{name}</h1>
            </div>
            <div className='text-center font-bold'>
                <h2>{title}</h2>
            </div>
            <div className=''>
                <img src={image}alt='organizer2-image'className='organizers-image mx-auto shadow-lg'/>
            </div>
            <div className='organizer-bio font-bold text-center opacity-70 mx-40'>
                <p>{bio}</p>
            </div>
        </div>
        </>
    )
}
export default Organizer2