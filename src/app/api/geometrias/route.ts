import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'IHP',
  password: 'ihp@ihp',
  port: 5432,
});

export async function GET(req: NextRequest) {
  try {
    const client = await pool.connect();
    const result = await client.query(`
      SELECT
        ST_AsGeoJSON(b.geom::geometry) AS bacia_geom,
        ST_AsGeoJSON(lr.geom::geometry) AS leito_rio_geom,
        ST_AsGeoJSON(ba.geom::geometry) AS banhado_geom
      FROM "Sala_situacao_RioDaPrata"."Bacia_Rio_Da_Prata" b
      JOIN "Sala_situacao_RioDaPrata"."Leito_Rio_Da_Prata" lr ON lr.id = b.id
      JOIN "Sala_situacao_RioDaPrata"."Banhado_Rio_Da_Prata_2023" ba ON ba.id = b.id
      WHERE b.id = 1;
    `);
    client.release();

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Dados não encontrados' }, { status: 404 });
    }

    const data = {
      bacia: {
        nome: result.rows[0].bacia_nome,
        area: result.rows[0].bacia_area,
        geometria: JSON.parse(result.rows[0].bacia_geom),
      },
      leito_rio: {
        geometria: JSON.parse(result.rows[0].leito_rio_geom),
      },
      banhado: {
        geometria: JSON.parse(result.rows[0].banhado_geom),
      }
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return NextResponse.json({ error: 'Erro ao buscar dados' }, { status: 500 });
  }
}
