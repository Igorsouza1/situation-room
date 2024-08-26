import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'IHP',
  password: 'ihp@ihp',
  port: 5432, // Porta padrão do PostgreSQL
});

export async function GET(req: NextRequest) {
  try {
    // Conectar ao banco de dados e executar a consulta
    const client = await pool.connect();
    const result = await client.query(`
      SELECT ST_AsGeoJSON(geom::geometry) as geom
      FROM "Sala_situacao_RioDaPrata"."Bacia_Rio_Da_Prata"
      WHERE id = 1;
    `);
    client.release(); // Liberar o cliente após a consulta

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Geometria não encontrada' }, { status: 404 });
    }

    // Extrai o GeoJSON da consulta
    const geoJson = JSON.parse(result.rows[0].geom);

    return NextResponse.json(geoJson);
  } catch (error) {
    console.error('Erro ao buscar geometria:', error);
    return NextResponse.json({ error: 'Erro ao buscar geometria' }, { status: 500 });
  }
}
