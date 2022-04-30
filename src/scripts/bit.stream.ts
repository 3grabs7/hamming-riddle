import { BehaviorSubject, tap } from 'rxjs';
import type { Bit } from '../models/bit.class';
import type { FlipConfig } from '../models/flip-config.type';
import { ParityBit } from '../models/parity-bit.class';
import { AppState } from '../models/app-state.enum';
import type { ParityIndex } from '../models/bit.types';

class BitService {
  /** Subject that holds the collection of all bits */
  private _bitCollection$ = new BehaviorSubject<Bit[]>(null);
  public bitCollection$ = this._bitCollection$.asObservable();

  /** Subject that emits when a bit has been flipped */
  private _flipBitHandler$ = new BehaviorSubject<FlipConfig>(null);
  public flipBitHandler$ = this._flipBitHandler$.asObservable();

  /** Subject that emits when app state has changed */
  private _appState$ = new BehaviorSubject<AppState>(
    AppState.WAITING_FOR_RESPONSE
  );
  public appState$ = this._appState$.asObservable();

  constructor() {
    this._readBitCollectionStream();
    this._readFlipBitHandlerStream();
  }

  /** Defines the stream of _bitCollection$ */
  private _readBitCollectionStream(): void {}

  /** Defines the stream of _flipBitHandler$ */
  private _readFlipBitHandlerStream(): void {
    this._flipBitHandler$
      .pipe(tap((flipConfig: FlipConfig) => this._validateResult(flipConfig)))
      .subscribe();
  }

  /** When a bit has been flipped we validate the state of all bits
   *  Making sure that one, and only one bit is incorrect
   *  and that the key is hidden behind the incorrect bit
   */
  private _validateResult(flipConfig: FlipConfig): void {
    const { dataBits, parityBits } = this._seperateBits();

    console.log(dataBits, parityBits);
  }

  /** Seperates data and parity bits and returns them as two arrays */
  private _seperateBits(): { parityBits: Bit[]; dataBits: Bit[] } {
    const bitCollection: Bit[] = this._bitCollection$.getValue();
    if (!bitCollection) return { parityBits: [], dataBits: [] };

    const parityBits: Bit[] = [];
    const dataBits: Bit[] = [];

    bitCollection.forEach((bit: Bit) => {
      if (bit.type === 'data') dataBits.push(bit);
      else parityBits.push(bit);
    });

    return { parityBits, dataBits };
  }

  public flipBit(bit: Bit): void {
    bit.flip();

    let config: FlipConfig;

    if (bit.type === 'data') config = { type: 'data', position: bit.position };
    else config = { type: 'parity', position: bit.position as ParityIndex };

    if (!config.position || !config.type) {
      console.log('Bit position was not compatible with bit type.');
      return;
    }

    this._flipBitHandler$.next(config);

    this._appState$.next(AppState.CORRECT);
  }
}

const bitService = new BitService();

export default bitService;
