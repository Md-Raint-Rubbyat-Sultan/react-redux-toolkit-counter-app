import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state?.counter?.count)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div >
            <button onClick={() => dispatch(reset())} style={{
                margin: "12px 0"
            }}>Reset</button>
            <div>
                <button onClick={() => dispatch(incrementByAmount(5))}>IncrementByAmount</button>
                <button onClick={() => dispatch(decrementByAmount(5))}>DecrementByAmount</button>
            </div>
        </div>
    );
};

export default Counter;