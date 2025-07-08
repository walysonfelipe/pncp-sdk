export type DateInput = string | Date;

export interface PaginationParams {
  pagina: number;
  tamanhoPagina?: number;
}

export interface DataRangeParams {
  dataInicial: DateInput;
  dataFinal: DateInput;
}

export interface ContratacoesParams extends DataRangeParams, PaginationParams {
  codigoModalidadeContratacao: number;
  codigoModoDisputa?: number;
  uf?: string;
  codigoMunicipioIbge?: string;
  cnpj?: string;
  codigoUnidadeAdministrativa?: string;
  idUsuario?: number;
}

export interface ContratosParams extends DataRangeParams, PaginationParams {}
export interface AtasParams extends DataRangeParams, PaginationParams {}
export interface PCAParams extends DataRangeParams, PaginationParams {}
export interface InstrumentosParams extends PaginationParams {}

export namespace Contratacoes {
  function consultarPublicacao<T = any>(params: ContratacoesParams): Promise<T>;
  function consultarProposta<T = any>(params: ContratacoesParams): Promise<T>;
  function consultarAtualizacao<T = any>(params: ContratacoesParams): Promise<T>;
}

export namespace Contratos {
  function consultarPublicacao<T = any>(params: ContratosParams): Promise<T>;
  function consultarAtualizacao<T = any>(params: ContratosParams): Promise<T>;
}

export namespace Atas {
  function consultarPeriodo<T = any>(params: AtasParams): Promise<T>;
  function consultarAtualizacao<T = any>(params: AtasParams): Promise<T>;
}

export namespace PCA {
  function consultar<T = any>(params: PCAParams): Promise<T>;
  function consultarUsuario<T = any>(params: PCAParams): Promise<T>;
  function consultarAtualizacao<T = any>(params: PCAParams): Promise<T>;
}

export namespace Instrumentos {
  function consultarInclusao<T = any>(params: InstrumentosParams): Promise<T>;
}

export const BASE_URL: string;
