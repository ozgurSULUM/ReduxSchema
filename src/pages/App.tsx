import { FormEvent, useEffect, useRef } from 'react';

// Store selector and dispatch
import { useAppSelector, useAppDispatch } from '../store';

// API Hooks
import { useGetHotelsQuery } from '../store/apis/hotels.api';

// Slice reducers
import { setUser } from '../store/slices/user.slice';


function App() {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const { data, isFetching } = useGetHotelsQuery(null);
    const userId = useRef<HTMLInputElement>(null);
    const userName = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();

        dispatch(setUser({
            userId: userId.current?.value,
            userName: userName.current?.value,
            email: email.current?.value
        }))

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user-id">User Id</label> <br/>
                <input ref={userId} type="text" name="user-id" id="user-id" />  <br />
                <label htmlFor="user-name">User Name</label> <br />
                <input ref={userName} type="text" name="user-name" id="user-name" /> <br />
                <label htmlFor="email">Email</label> <br />
                <input ref={email} type="text" name="email" id="email" /> <br/>
                <button type="submit">Submit</button>
            </form>
            {isFetching ? 'fetching...' : data?.map((hotel) => (
                <p key={hotel.hotelId}>
                    {hotel.hotelId} <br />
                    {hotel.hotelName} <br />
                    {hotel.hotelTitle}
                </p>
            ))}
        </div>
    )
}

export default App
App