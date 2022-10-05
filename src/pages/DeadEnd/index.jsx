import { Box } from "@mui/system";
import BaseLayout from "../../layouts/BaseLayout";

const DeadEnd = () => {

    return (
        <>
            <Box sx={{ marginTop: '5vh' }} />
            <div>
                <BaseLayout />
                <h1>Page non trouvée ! </h1>
                <img className=".poster" src="/src/assets/deadEnd.jpg" alt="" />

            </div>
        </>
    );

};

export default DeadEnd;