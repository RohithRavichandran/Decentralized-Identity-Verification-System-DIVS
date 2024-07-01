import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [additionalData, setAdditionalData] = useState('');
    const [lookupAddress, setLookupAddress] = useState('');
    const [userData, setUserData] = useState(null);
    const [additionalInfo, setAdditionalInfo] = useState('');

    const setUser = async () => {
        await axios.post('http://localhost:3000/setUser', { name, age, email, additionalData });
    };

    const getUser = async () => {
        const response = await axios.get(`http://localhost:3000/getUser/${lookupAddress}`);
        setUserData(response.data);

        // Fetch additional data from IPFS
        const ipfsResponse = await axios.get(`http://localhost:8080/ipfs/${response.data.ipfsHash}`);
        setAdditionalInfo(ipfsResponse.data);
    };

    return (
        <div>
            <h1>Decentralized Identity Verification System</h1>
            <div>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <textarea placeholder="Additional Data" value={additionalData} onChange={e => setAdditionalData(e.target.value)}></textarea>
                <button onClick={setUser}>Set User</button>
            </div>
            <div>
                <input type="text" placeholder="Address to Lookup" value={lookupAddress} onChange={e => setLookupAddress(e.target.value)} />
                <button onClick={getUser}>Get User</button>
                {userData && (
                    <div>
                        <p>Name: {userData.name}</p>
                        <p>Age: {userData.age}</p>
                        <p>Email: {userData.email}</p>
                        <p>Additional Info: {additionalInfo}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
