/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 27/08/2021
 * Author: Joselito Nascimento
 */

 const { Pool } = require('pg');
 const dotenv = require('dotenv');
 
 dotenv.config();
 
 // ==> Conexão com a Base de Dados:
 const pool = new Pool({
   // connectionString: process.env.DATABASE_URL
   user: 'postgres',
   host: '127.0.0.1',
   database: 'dbPropertiesRent',
   // password: 'rent@112021', // Senha escritório
   password: '123', // Senha escritório
   // password: '123@123', // Senha notebook casa
   port: 5432,  
 });
 
 pool.on('connect', () => {
   console.log('Base de Dados conectado com sucesso!');
 });
 
 module.exports = {
   query: (text, params) => pool.query(text, params),
 };