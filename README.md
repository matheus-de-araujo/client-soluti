<h1 align="center" font-weight:bold>
  Prova Técnica - Soluti
</h1>

<h3 align="center">
  Prova Técnica em Laravel - Soluti
</h3>

<p align="center">
	<a href="#-sobre-o-projeto">Sobre</a> •
 	<a href="#-como-executar-o-projeto">Como executar</a> • 
 	<a href="#-metas-no-projeto">Metas</a> • 
  <a href="#-tecnologias">Tecnologias</a>
</p>
                           
<h4 align="center"> 
	🚧  Status: Em construção... 🚧
</h4>


## :pencil: Sobre o projeto
É uma prova técnica em Laravel para o processo seletivo da soluti - Esse projeto é uma API REST que será consumida por um Front End React que está [nesse](https://github.com/matheus-de-araujo/client-soluti) repositório.
	 
## 🎯 Metas do Projeto
- [X] Preparar o ambiente de desenvolvimento.

- [X] Construir um CRUD de usuario | Arquitetura REST
  * Nome
  * Cpf - único
  * Telefones
  * Email - único
  * Data de nascimento
  * Senha
  * Certificado [dados do certificado]
  * Endereço

- [X]  Implementar um Sistema de Autenticação | Passport.
- [X]  Fazer a leitura de um Certificado e salvar no Banco | PhpSecLib.

## 🚀 Como executar o projeto

É preciso ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/), ter o Laravel, Php e Mysql instalado.

#### 🧭 Rodando a aplicação

```bash

# Clone este repositório
$ git clone https://github.com/matheus-de-araujo/desafio-laravel
$ cd desafio-laravel
$ composer install
$ php artisan migrate
$ php artisan passport:install
$ php artisan key:generate

```
Não se esqueça de copiar o arquivo .Env e colocar as informações relativas ao Banco de Dados da sua máquina

## 🛠 Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- **Laravel**
- **Javascript**
- **Artisan**
- **Composer**

---

Feito por: Matheus de Araújo 🇧🇷
