import React, { useState, useEffect } from 'react';
import bgcafe from '../../asset/bgcafe.jpg';
import Card from '../../component/card';

const Home = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeButton, setActiveButton] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
                setFilteredData(result); // Set initial filtered data
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const onAllproduct = (e) => {
        e.preventDefault();
        setFilteredData(data); // Show all products
        setActiveButton('all'); // Set active button to 'all'
    };

    const onAvailablenow = (e) => {
        e.preventDefault();
        const availableProducts = data.filter(item => item.available); // Filter available products
        setFilteredData(availableProducts);
        setActiveButton('available'); // Set active button to 'available'
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <img className='bgImg' src={bgcafe} alt="bgImg" />
            <div className='container flex'>
                <div className='container1 flex'>
                    <h1>Our Collection</h1>
                    <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                </div>
                <div className='button'>
                    <button id="btn1" onClick={onAllproduct} style={{ backgroundColor: activeButton === 'all' ? '#6F757C' : 'transparent' }}>All Products</button>
                    <button id="btn2" onClick={onAvailablenow} style={{ backgroundColor: activeButton === 'available' ? '#6F757C' : 'transparent' }}>Available Now</button>
                </div>
                <Card value={filteredData} /> {/* Pass filtered data to Card component */}
            </div>  
        </>
    );
};

export default Home;
