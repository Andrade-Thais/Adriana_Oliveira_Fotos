from fastapi import APIRouter, HTTPException
from helpers.encriptar_senha import encriptar_senha
from config.mongodb_config import colecao
from models.Cliente import Cliente

router = APIRouter()

@router.put('/app/editar-cliente/{id}')
def atualizar_cliente(email: str, cliente: Cliente):
    try:
        cliente_existente = colecao.find_one({"email": email.lower()})
        if cliente_existente is None:
            raise HTTPException(status_code=404, detail="Cliente não encontrado")

        update_data = {
            "$set": {
                "registryType": cliente.registryType,
                "personType": cliente.personType,
                "name": cliente.name.lower(),
                "surname": cliente.surname.lower(),
                "email": cliente.email.lower(),
                "phone": cliente.phone,
                "birthDate": cliente.birthDate,
                "zip": cliente.zip,
                "city": cliente.city.lower(),
                "state": cliente.state.lower(),
                "street": cliente.street.lower(),
                "streetNumber": cliente.streetNumber,
                "complement": cliente.complement.lower() if cliente.complement else None,
                "neighborhood": cliente.neighborhood.lower(),
                "receiveSMS": cliente.receiveSMS,
                "receiveEmail": cliente.receiveEmail,
                "accountType": cliente.accountType
            }
        }
        colecao.update_one({"email": email.lower()}, update_data)

        cliente_atualizado = colecao.find_one({"email": email.lower()})
        cliente_atualizado['_id'] = str(cliente_atualizado['_id'])
        return {"aviso": "Cliente atualizado com sucesso", "cliente": cliente_atualizado}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))