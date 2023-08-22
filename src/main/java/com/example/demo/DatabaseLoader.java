package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repositoryI;
	private final MusicoRepository repositoryM;
	private final BandaRepository repositoryB;
	private final IntegranteRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		InstrumentoRepository repositoryI,
		MusicoRepository repositoryM,
		BandaRepository repositoryB,
		IntegranteRepository repositoryN
		) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {

		Instrumento iMatematica = new Instrumento("Jeltsin", "Matematica", "Bajas notas en matematica");
		Instrumento iCiencia = new Instrumento("Macarena", "Ciencia", "Bajas notas en ciencia");
		Instrumento iComunicacion = new Instrumento("Eva", "Comunicacion", "Bajas de notas en Comunicacion");
		this.repositoryI.save(new Instrumento("Luis", "Matematica", "Bajas notas en matematic"));
		this.repositoryI.save(new Instrumento("Luis Angel","Comunicacion","Bajas de notas en Comunicacion"));
		this.repositoryI.save(new Instrumento("Carlos","Ciencia","Bajas notas en Ciencia"));
		this.repositoryI.save(new Instrumento("Daniel", "Comunicacion", "Bajas notas en Comunicacion"));
		this.repositoryI.save(iMatematica);
		this.repositoryI.save(iCiencia);
		this.repositoryI.save(iComunicacion);

		Musico mMultiplicacion = new Musico("Multiplicacion");
		Musico mVerbo = new Musico("Verbo");
		Musico mQuimica = new Musico("Quimica ");
		this.repositoryM.save(mMultiplicacion);
		this.repositoryM.save(mVerbo);
		this.repositoryM.save(mQuimica);
		this.repositoryM.save(new Musico("Fisica"));

		Banda bTutores = new Banda("Natasha");
		Banda bProfesores = new Banda("Miguel");
		this.repositoryB.save(bTutores);
		this.repositoryB.save(bProfesores);

		Integrante intSebas = new Integrante(bTutores, mMultiplicacion, iMatematica);
		this.repositoryN.save(intSebas);
		Integrante intJerico = new Integrante(bProfesores, mQuimica, iCiencia);
		this.repositoryN.save(intJerico);
		Integrante intQuezada = new Integrante(bTutores, mVerbo, iComunicacion);
		this.repositoryN.save(intQuezada);


	}
}