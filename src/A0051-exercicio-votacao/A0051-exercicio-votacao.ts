type VotationOption = {
  numberOfvores: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvores += 1;
  }

  get options(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VoteApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const options of votation.options) {
        console.log(options.option, options.numberOfvores);
      }
      console.log('###\n');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Python', numberOfvores: 0 });
votation1.addVotationOption({ option: 'JavaScript', numberOfvores: 0 });
votation1.addVotationOption({ option: 'TypeScript', numberOfvores: 0 });

votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);

const votationApp = new VoteApp();
votationApp.addVotation(votation1);
votationApp.showVotations();

const votation2 = new Votation('Qual sua cor favorita?');
votation2.addVotationOption({ option: 'Vermelho', numberOfvores: 0 });
votation2.addVotationOption({ option: 'Verde', numberOfvores: 0 });
votation2.addVotationOption({ option: 'Azul', numberOfvores: 0 });

votation2.vote(1);
votation2.vote(1);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);

const votationApp1 = new VoteApp();
votationApp1.addVotation(votation2);
votationApp1.showVotations();
