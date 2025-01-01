// import React from 'react';

// const Ticket = ({data}) => {
    
//     // console.log("Visitor data format from Ticket", props.data.visitor_data);
//     console.log("Visitor data format from Ticket", data);

//     let Element = [];
//     const plotTicket = () => {
//         Object.keys(data.visitorData.visitor_data).forEach((key, indx) => {
//             let value = data.visitorData.visitor_data[key];
//             Element.push(
//                 <div key={indx} className='flex justify-between'><span className='w-[80px]'>{key}</span> : <span className='w-[120px]'>{value}</span></div>
//             )
//         })
//         return Element;
//     }
//     return (
//         <div className='flex flex-col items-center w-full py-4 bg-white' >
//             <div className='flex flex-col w-[250px]'>
//                 {plotTicket()}
//             </div>
//             <div className='flex flex-col w-full items-center mt-20'>
//                 <div style={{ height: '120px', width: 'auto' }} dangerouslySetInnerHTML={{ __html: data.visitorData.qrData}} />
//                 <div className='flex flex-col w-[140px] text-[#5e5c5c] mt-16'>
//                     <p >Ticket Service</p>
//                     <p>Provided By :</p>
//                     <p>** SolutionHeap **</p>
//                     <p className='mt-2'>Contact Us : </p>
//                     <p>asksolutionheap@gmail.com</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Ticket;

import React, { useRef, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { toPng } from 'html-to-image';
import { Share2, AlertCircle } from 'lucide-react';

const InvitationCard = ({data}) => {
  const cardRef = useRef(null);
  const [error, setError] = useState(null);

  const handleShare = async () => {
    if (cardRef.current === null) {
      setError("Unable to generate image. Please try again.");
      return;
    }

    try {
      const dataUrl = await toPng(cardRef.current, { quality: 0.95 });
      
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Party Invitation',
            text: 'You\'re invited to our party!',
            url: dataUrl
          });
        } catch (shareError) {
          console.error('Error sharing:', shareError);
          downloadImage(dataUrl);
        }
      } else {
        downloadImage(dataUrl);
      }
    } catch (error) {
      console.error('Error generating image:', error);
      setError("Unable to generate image. Please try again.");
    }
  };

  const downloadImage = (dataUrl) => {
    const link = document.createElement('a');
    link.download = 'invitation.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-4 overflow-hidden">
      {error && (
        <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <div className="flex">
            <AlertCircle className="h-6 w-6 mr-2" />
            <p>{error}</p>
          </div>
        </div>
      )}
      <div 
        ref={cardRef}
        className="relative bg-white rounded-lg shadow-2xl overflow-hidden max-w-md w-full transform transition-all duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300 opacity-20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')] opacity-10" />
        <div className="relative p-8 space-y-6">
          <h1 className="text-4xl font-bold text-center text-indigo-600 animate-fade-in-down">You're Invited!</h1>
          <p className="text-xl text-center text-gray-700 animate-fade-in-up">Join us for an unforgettable night of fun and celebration!</p>
          <div className="flex justify-center animate-pulse">
            {/* <QRCodeSVG 
              value="https://example.com/party-details" 
              size={200}
              bgColor={"#ffffff"}
              fgColor={"#4F46E5"}
              level={"L"}
              includeMargin={false}
            /> */}
            <div style={{ height: '120px', width: 'auto' }} dangerouslySetInnerHTML={{ __html: data.visitorData.qrData}} />

          </div>
          <div className="text-center space-y-2 animate-fade-in mt-5">
            <p className="text-lg font-semibold text-gray-800">Date: July 15, 2023</p>
            <p className="text-lg font-semibold text-gray-800">Time: 8:00 PM</p>
            <p className="text-lg font-semibold text-gray-800">Venue: Starlight Lounge</p>
          </div>
        </div>
        <div className="relative bg-indigo-100 p-4">
          <button
            onClick={handleShare}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
          >
            <Share2 className="mr-2" />
            Share Invitation
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;