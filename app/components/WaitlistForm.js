'use client';

import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';

const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [firestore, setFirestore] = useState(null);  // State to hold Firestore instance

  useEffect(() => {
    // Dynamically import Firebase and set Firestore instance
    import('../../firebase').then(({ firestore }) => {
      setFirestore(firestore);
      console.log('Firestore instance set:', firestore);
    }).catch(error => {
      console.error('Error importing Firebase:', error);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    if (!firestore) {
      console.error('Firestore not initialized');
      setMessage('Firestore not initialized. Please try again.');
      setIsLoading(false);
      return;
    }

    console.log('Form submitted. Name:', name, 'Email:', email);

    try {
      if (!name || !email) {
        throw new Error('Name and Email are required');
      }

      console.log('Attempting to add document to Firestore...');
      const waitlistCollection = collection(firestore, 'waitlist');
      console.log('Waitlist collection reference:', waitlistCollection);

      const docRef = await addDoc(waitlistCollection, {
        name,
        email,
        timestamp: new Date()
      });

      console.log('Document written with ID:', docRef.id);
      setMessage('Successfully joined the waitlist!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error adding document:', error);
      setMessage(`An error occurred: ${error.message}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="space-y-6 p-8 rounded-lg"
      style={{ backgroundColor: 'rgb(0, 204, 204)' }}
      onSubmit={handleSubmit}
    >
      <h2 className="text-4xl font-bold text-white text-center mb-6">
        Join Our Waitlist
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md text-black"
          style={{ borderColor: 'rgb(0, 0, 0)' }}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-md text-black"
          style={{ borderColor: 'rgb(0, 0, 0)' }}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full font-bold py-3 px-4 rounded-md"
        style={{
          backgroundColor: 'rgb(255, 255, 0)',
          color: 'rgb(50, 50, 50)',
          opacity: isLoading ? 0.7 : 1,
          cursor: isLoading ? 'not-allowed' : 'pointer',
        }}
        disabled={isLoading}
      >
        {isLoading ? 'Joining...' : 'Join Waitlist'}
      </button>
      {message && (
        <p className={`text-center mt-4 ${message.includes('error') ? 'text-red-500' : 'text-white'}`}>
          {message}
        </p>
      )}
    </form>
  );
};

export default WaitlistForm;
