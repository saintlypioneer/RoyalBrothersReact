import styled from "styled-components";
import dayjs from "dayjs";

import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { TimeInput } from '@mantine/dates';
import {IconCalendar, IconClock} from '@tabler/icons-react'


function SearchForm(props) {

    const [value, setValue] = useState(null);

    return (
        <Container>
            <h1>Search your next ride</h1>
            <form>
                <DateTime>
                    <p>Pickup</p>
                    <div>
                    <DatePickerInput
                        minDate={new Date()}
                        maxDate={dayjs(new Date()).add(1, 'month').toDate()}
                        placeholder="Date"
                        maw={400}
                        miw={"45%"}
                        mx="auto"
                        value={value}
                        onChange={setValue}
                        icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                    />
                    <TimeInput
                        placeholder="Time"
                        miw={"45%"}
                        maw={400}
                        mx="auto" 
                        icon={<IconClock size="1rem" stroke={1.5} />}
                     />
                    </div>
                </DateTime>
                <DateTime>
                    <p>Dropoff</p>
                    <div>
                    <DatePickerInput
                        minDate={new Date()}
                        maxDate={dayjs(new Date()).add(1, 'month').toDate()}
                        placeholder="Date"
                        maw={400}
                        miw={"45%"}
                        mx="auto"
                        value={value}
                        onChange={setValue}
                        icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                    />
                    <TimeInput
                        placeholder="Time"
                        miw={"45%"}
                        maw={400}
                        mx="auto" 
                        icon={<IconClock size="1rem" stroke={1.5} />}
                     />
                    </div>
                </DateTime>
                <button className="submit">Search</button>
            </form>
        </Container>
    );
}

const Container = styled.div`
    background-color: white;
    width: fit-content;
    min-width: 400px;
    height: fit-content;
    padding: 20px;
    border-radius: 5px;

    @media (max-width:600px) {
        width: 100%;
        min-width: 0px;
    }

    h1{
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .submit{
        background-color: black;
        color: white;
        padding: 5px 10px;
        width: 100%;
        border-radius: 5px;
        font-weight: 600;
    }
`;

const DateTime = styled.div`
    margin-bottom: 20px;

    &>p{
        font-size: 1.1rem;
        margin-bottom: 5px;
        font-weight: 700;
    }

    &>div{
        display: flex;
        gap: 10px;
        justify-content: space-between;
    }
`;

export default SearchForm;