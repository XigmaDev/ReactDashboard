import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Button,
} from "@material-tailwind/react";


function Webscore() {


    return (
        <div className="rounded-3xl shadow-md w-96 mb-4  mr-3">
            <Card
                shadow={false}
                className="relative h-96 p-4 items-center flex flex-col justify-end overflow-hidden "
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-10 px-6 md:px-12 w-80">
                <Button size="lg" fullWidth={true} color="yellow">
                        Web Score With Ai
                    </Button>
                </CardBody>
                
                
            </Card>
        </div>
    );
}
export default Webscore
