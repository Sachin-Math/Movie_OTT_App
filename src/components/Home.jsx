import {useState} from 'react'
import Movieslist from './Movieslist';

const Home = () => {
    
    const [movies, setMovies] = useState([
        {
         id:1,
         movieName: "KGF",
         hero: "yash",
         director: "Neel",
         genere: "action drama",
         poster: "",
         trailer: "",
         storyLine:
           "K.G.F: Chapter 1 is a 2018 Indian Kannada-language period action film[5] written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner of Hombale Films. It is the first of two installments in the series, followed by K.G.F: Chapter 2. The film features Yash as Rocky while debutant Ramachandra Raju features as Garuda. Anant Nag narrates the film, while Srinidhi Shetty, Vasishta N. Simha, Achyuth Kumar, and Malavika Avinash appear in supporting roles. Filmed on a budget of ₹800 million (equivalent to ₹910 million or US$11 million in 2020), it was the most expensive Kannada film at the time of its release.[2] The film focuses on Rocky, a high-ranking assassin in Mumbai, who was born in poverty. After being offered the total control of Mumbai by his employer's boss, he disguises himself as a slave-laborer in the Narachi limestone mine (Kolar Gold Fields), aiming to assassinate Garuda, the future heir of Kolar Gold Fields.",
       },
        {
         id:2,
         movieName: "RRR",
         hero: "NTR",
         director: "Rajmouli",
         genere: "action drama comedy",
         poster: "",
         trailer: "",
         storyLine:
           "RRR[note 1] is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who wrote the film with V. Vijayendra Prasad. It is produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a fictional story about two real-life Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), and their fight against the British Raj. Set in 1920, the plot explores the undocumented period in their lives when both the revolutionaries chose to go into obscurity before they began the fight for their country.",
       },
        {
           id:3,
         movieName: "VR",
         hero: "Sudep",
         director: "Anup",
         genere: "action drama comedy suspense",
         poster: "",
         trailer: "",
         storyLine:
           "RRR[note 1] is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who wrote the film with V. Vijayendra Prasad. It is produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a fictional story about two real-life Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), and their fight against the British Raj. Set in 1920, the plot explores the undocumented period in their lives when both the revolutionaries chose to go into obscurity before they began the fight for their country.",
       },
        {
           id:4,
         movieName: "KGF 2",
         hero: "yash",
         director: "Neel",
         genere: "action drama",
         poster: "",
         trailer: "",
         storyLine:
           "K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film[5] written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner of Hombale Films. It is the first of two installments in the series, followed by K.G.F: Chapter 2. The film features Yash as Rocky while debutant Ramachandra Raju features as Garuda. Anant Nag narrates the film, while Srinidhi Shetty, Vasishta N. Simha, Achyuth Kumar, and Malavika Avinash appear in supporting roles. Filmed on a budget of ₹800 million (equivalent to ₹910 million or US$11 million in 2020), it was the most expensive Kannada film at the time of its release.[2] The film focuses on Rocky, a high-ranking assassin in Mumbai, who was born in poverty. After being offered the total control of Mumbai by his employer's boss, he disguises himself as a slave-laborer in the Narachi limestone mine (Kolar Gold Fields), aiming to assassinate Garuda, the future heir of Kolar Gold Fields.",
       },
    ]);
    
    return ( 
        <div>
            
            <Movieslist movies={movies.filter((movie)=>{ return movie.genere.includes("comedy") })} title="Comdey movies" />
            
            <Movieslist movies={movies} title="All the movies" />
            
            
            
            
            
            
        </div>
    );
}
export default Home;