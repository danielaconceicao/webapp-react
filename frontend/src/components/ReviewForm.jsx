/* eslint-disable react/prop-types */
import { useContext } from "react"
import AppContext from '../context/appContext'

export default function ReviewForm({movie_id}){
    const { name, setName, star, setStar, reviewForm, setReviewForm, errorMessageForm, setErrorMessageForm } = useContext(AppContext)

    function handleFormSubmit(e){
        e.preventDefault()

        if(name.length < 2 || star === 0 || reviewForm.length < 4){
            setErrorMessageForm('Complete all fields on the form correctly')
        }else{
            setErrorMessageForm(null)

            const formData = {
                name,
                text: reviewForm,
                vote: star
            }


            const app_url = `http://localhost:3004/movies/${movie_id}/review`

            fetch(app_url, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(data => {
                    console.log(data);

                
                })
                .catch(err => console.log(err))
        } 
        setName('')
        setStar(0)
        setReviewForm('') 
    } 

    function HandleFormToggle(){
        document.getElementById('form-card').classList.toggle('d-none')
    }


    return(
        <div className="container">
            <div className="text-end"><button onClick={HandleFormToggle} className="btn btn-dark mb-2" >Write a review</button></div>
            <div id="form-card" className="card d-none">
                <div className="card-body">
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name">User name</label>
                            <input name="name" id="name" type="text" className="form-control" placeholder="your name here" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div className="star my-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= star ? '-fill' : ''} `} onClick={() => setStar(n)}></i>)}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="review">Your review</label>
                            <textarea className="form-control" name="review" id="review" placeholder="leave your review here " value={reviewForm} onChange={(e) => setReviewForm(e.target.value)} required></textarea>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Send</button>
                            {errorMessageForm && <span className="text-danger"> <i className="bi bi-x"></i> {errorMessageForm}</span>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}