import dinnerTable from '../../assets/contentAssets/dinnerTable.png'
export default function HaveDinner(){
    return (<>
    <div className="w-full  mt-[50px] flex flex-col gap-3 px-5 ">
        <div className="text-white   ">
          <p className='font-bold'>Terms and Policies
          </p>
          <br />
           <p className='text-sm text-gray-400'>We highly recommended you to read our Terms and Policies before make a reservation</p>
            </div>
            <div className="flex gap-3 flex-col md:flex-row text-white  ">

                <div className='w-full p-3 flex flex-col  md:max-w-[350px] overflow-hidden rounded bg-[#101010]'>
                  <div className='font-bold'>Reservation Cancelling</div>
                  <div className='w-full h-full pt-5 text-gray-400 text-sm'>
                    <ol className='ml-3 list-decimal space-y-2'>

                        <li>Cancellations made at least 12 hours before the reservation time will not incur any charges</li>
                        <li>Full refunds will be issued for cancellations made at least 24 hours in advance</li>
                        <li>Deposits are non-refundable for cancellations made within 24 hours of the reservation time.</li>
                    </ol>
                  </div>
                </div>
                <div className='w-full p-3  md:max-w-[350px] overflow-hidden rounded bg-[#101010]'>
                <div className='font-bold'>Late Arrival</div>
                <ol className='ml-3 list-decimal space-y-2 text-gray-400 text-sm'>

<li>If a guest fails to arrive within 15 minutes of the reservation time without prior notice,
     the reservation will be considered a no-show, and the table may be released to other guests</li>
<li>No-show guests may incur a fee equivalent to [amount/percentage] of the booking deposit.</li>
</ol>
              </div>  
            <div className='w-full p-3 md:max-w-[350px]  overflow-hidden rounded bg-[#101010]'>
            <div className='font-bold'>Secure Deposit</div>
            <ol className='list-decimal ml-3 text-sm text-gray-400'>
  <li>
    A deposit is required to secure your reservation for specific conditions, such as group bookings or special events. The deposit amount will be communicated during the booking process.
  </li>

  <li>
    Deposits are fully refundable for cancellations made at least <em>X hours/days</em> before the reservation time. Deposits are non-refundable for cancellations made within <em>X hours/days</em> of the reservation.
  </li>
  <li>
    The deposit amount will be deducted from your total bill upon dining. For no-shows or late cancellations, the deposit may be retained as a cancellation fee.
  </li>

 
  <li>
    Reservations will only be confirmed upon receipt of the deposit. Non-payment of the deposit within the specified time frame will result in the release of the reservation.
  </li>
  <li>
    Any disputes regarding deposits will be addressed in accordance with our internal policies. Please contact us at [contact information] for assistance.
  </li>
 
</ol>

            </div>
            </div>


    </div>
    </>)
}