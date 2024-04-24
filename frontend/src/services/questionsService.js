export const getQuestions = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/questions");

        if (!response.ok) {
            throw new Error("Error al obtener las preguntas");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
