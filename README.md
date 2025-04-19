# FreqUI 한국어 버전

이 프로젝트는 [Freqtrade](https://github.com/freqtrade/freqtrade)의 웹 인터페이스인 FreqUI를 한국어로 번역한 버전입니다.

## 주요 특징

- 모든 UI 요소의 한국어 번역
- 차트 관련 설정 및 기능 한국어화
- 거래 내역 및 설정 화면 한국어화
- 대시보드 및 통계 정보 한국어화

## 설치 방법

### 방법 1: Freqtrade의 install-ui 명령어 사용 (권장)

Freqtrade가 이미 설치되어 있다면, 다음 명령어를 사용하여 한국어 UI를 설치할 수 있습니다:

```bash
python -m freqtrade install-ui
```

이 명령어는 자동으로 최신 한국어 UI를 다운로드하고 설치합니다.

### 방법 2: 수동 설치

1. 이 저장소의 [릴리스 페이지](https://github.com/chominchang/korean-freqtrade-ui/releases)에서 최신 소스 코드(`Source code (zip)`)를 다운로드합니다.
2. 압축을 풀고 내용물을 Freqtrade의 UI 디렉토리(`freqtrade/user_data/ui`)에 복사합니다.

## 사용 방법

UI가 설치된 후에는 Freqtrade의 웹 인터페이스를 활성화하고 접속해야 합니다:

1. Freqtrade 실행 시 `--enable-ui` 옵션을 추가합니다:
   ```bash
   freqtrade trade --config config.json --enable-ui
   ```

2. 기본적으로 UI는 `http://localhost:8080`에서 접근할 수 있습니다. 원격 서버에 설치한 경우 해당 서버의 IP 주소나 도메인 이름을, 그리고 포트를 사용하세요.

## 번역 내역

- 2025-04-20: 초기 한국어 번역 완료
- 모든 주요 UI 요소 번역
- 차트 관련 설정 및 기능 번역
- 거래 화면 및 설정 메뉴 번역

## 기여하기

번역 오류나 개선 사항이 있다면 이슈를 등록하거나 Pull Request를 보내주세요.

## 라이센스

이 프로젝트는 원본 Freqtrade와 동일한 [라이센스](https://github.com/freqtrade/freqtrade/blob/develop/LICENSE)를 따릅니다.