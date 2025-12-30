import React from 'react'
import Cards from './components/Cards'
import { Car } from 'lucide-react';


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57hcOBfCciRIoQyvIIVjImSAqCEMgnlQ6nQ&s",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];


  return (
    <div className="parent"> 

   { jobOpenings.map(function(elem){
      return <Cards  brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
    })} 


     {/* <User name="rohit sharma"/>
     <User name="Ritik raj"/> */}
    </div>
  )
}

export default App