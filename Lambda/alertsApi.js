const { Client } = require('pg');

const dbOptions = {
  host: 'your-rds-hostname',
  user: 'your-rds-username',
  password: 'your-rds-password',
  database: 'your-rds-database',
  port: 5432,
  ssl: true
};

const client = new Client(dbOptions);

exports.handler = async (event, context, callback) => {
  let response = {};
  let statusCode = 200;
  
  try {
    await client.connect();

    switch (event.httpMethod) {
      case 'POST':
        const requestBody = JSON.parse(event.body);
        const insertQuery = `INSERT INTO your_table_name (column1, column2, column3) VALUES ('${requestBody.column1}', '${requestBody.column2}', '${requestBody.column3}') RETURNING *`;
        const insertResult = await client.query(insertQuery);
        response = {
          statusCode,
          body: JSON.stringify(insertResult.rows[0])
        };
        break;
      case 'GET':
        const selectQuery = `SELECT * FROM your_table_name`;
        const selectResult = await client.query(selectQuery);
        response = {
          statusCode,
          body: JSON.stringify(selectResult.rows)
        };
        break;
      case 'DELETE':
        const id = event.pathParameters.id;
        const deleteQuery = `DELETE FROM your_table_name WHERE id = '${id}' RETURNING *`;
        const deleteResult = await client.query(deleteQuery);
        response = {
          statusCode,
          body: JSON.stringify(deleteResult.rows[0])
        };
        break;
      default:
        statusCode = 405;
        response = {
          statusCode,
          body: JSON.stringify({ message: 'Invalid HTTP method' })
        };
        break;
    }
  } catch (error) {
    statusCode = 500;
    response = {
      statusCode,
      body: JSON.stringify({ message: 'Error processing request', error })
    };
  } finally {
    await client.end();
  }
  
  callback(null, response);
};
