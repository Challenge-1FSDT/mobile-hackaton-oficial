import { ENDPOINTS } from './../base/Endpoints'; 

export const login = async (email : string,
                            password : string) => {

    const url = ENDPOINTS.LOGIN;
    console.log(' >> UsuarioRepository >>:'+url);
    const body = { email, password };

    try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        });

        console.log('ahhhh');

        if (!response.ok) {
            console.log(' >> if (!response.ok >> ' + response.ok);
            throw new Error(`HTTP status ${response.status}`);
        }

        return await response.json(); // Retorna os dados em caso de sucesso
    } catch (error : any) {
        //throw new Error(`Login failed: ${error.message}`);

        if(error.message=='HTTP status 401'){
            throw new Error(`Login e/ou Senha estão incorretos, por favor tente novamente.`);
        }else{
            throw new Error(`${error.message}`);
        }

    }
};