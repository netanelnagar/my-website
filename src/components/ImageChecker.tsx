import { useState, useEffect } from "react";
import { LuLoaderCircle } from "react-icons/lu";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/lib/firebase";



async function getUrl(imgName: string): Promise<string> {
    const storageRef = ref(storage, imgName);
    return await getDownloadURL(storageRef);
}

interface ImageCheckerProps {
    imageName: string;
    imageClass: string;
    pClass: string;
    errValue: string;
}

function ImageChecker({ imageName, imageClass, pClass, errValue }: ImageCheckerProps): JSX.Element {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);


    useEffect(() => {
        console.log(imageName)
        if (imageName) {
            getUrl(imageName).then((url) => setImageUrl(url)).catch(() => setIsError(true));
        }else{
            setIsError(true)
        }
    }, [imageName]);


    const handleLoad = () => {
        console.log("first")
        setIsLoading(false)
    };
    const handleError = () => setIsError(true);



    if (isError) {
        return <p className={`${imageClass} ${pClass}`}>{errValue}</p>;
    }

    return (
        <div className="relative">
            {isLoading && (
                <p className={`${imageClass} ${pClass}`}>
                    <LuLoaderCircle className="animate-spin" />
                </p>
            )}
            <img
                src={imageUrl}
                className={`${imageClass} ${isLoading ? "hidden" : ""}`}
                alt="Image"
                onLoad={handleLoad}
                onError={handleError}
            />
        </div>
    );
}

export default ImageChecker;
