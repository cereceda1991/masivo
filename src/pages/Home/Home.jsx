import { useEffect, useState } from "react";
import Certificate from "../../components/Certificate/Certificate";
import models from '../../models.json';
import './Home.css';
import ExcelReader from "../../components/ExcelReader/ExcelReader";
import DownloadButton from "../../components/DownloadButton/DownloadButton";

const Home = () => {
    const [imgFile, setImgFile] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [jsonData, setJsonData] = useState([]);

    const handleJSONLoaded = (data) => {
        setJsonData(data);
    };

    useEffect(() => {
        setImgPreview(models[0].src);
    }, []);

    useEffect(() => {
        // Realizar la renderización cuando se carguen los datos en jsonData
        // Aquí puedes realizar cualquier acción necesaria después de cargar los datos
        // Puedes actualizar variables de estado o realizar llamadas adicionales a la API
        // Por ejemplo, podrías actualizar el selectedImage con el primer modelo de la lista models
        if (models.length > 0) {
            setSelectedImage(models[0].src);
        }
    }, [jsonData]);

    const handleFileChange = (e) => {
        const [file] = e.target.files;
        setImgFile(file);

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImgPreview(reader.result);
                setSelectedImage(reader.result);
            };
        }
    };

    const handleImageClick = (model) => {
        setImgFile(null);
        setImgPreview(model.src);
        setSelectedImage(model.src);
    };

    return (
        <main className="main_container">
            <section className="section_left">
                <input
                    type="file"
                    className="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <div className="options">
                    {models.map((model) => (
                        <img
                            key={model.id}
                            src={model.src}
                            alt="certificate"
                            onClick={() => handleImageClick(model)}
                        />
                    ))}
                </div>
            </section>
            <section className="container_certificates-main">
                {jsonData.map((certificate, index) => (
                    <div className="certificate_container" key={index}>
                        <Certificate certificates={[certificate]} backgroundImage={selectedImage} />
                    </div>
                ))}
            </section>
            <section className="section_rigth">
                <ExcelReader onJSONLoaded={handleJSONLoaded} />
                <DownloadButton />
            </section>
        </main>
    );
};

export default Home;
