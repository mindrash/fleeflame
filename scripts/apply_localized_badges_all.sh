#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

LANGS=(fr es pt vi)

for lang in "${LANGS[@]}"; do
  while IFS= read -r -d '' file_path; do
    perl -0777 -i -pe "
      s#img/badges/app-store-badge\\.svg#img/badges/app-store-badge-${lang}.svg#g;
      s#img/badges/google-play-badge\\.svg#img/badges/google-play-badge-${lang}.svg#g;
    " "$file_path"
  done < <(find "$ROOT_DIR/apps" -type f -name "*.${lang}.html" -print0)
done

echo "Localized badge references applied across all localized app pages (fr/es/pt/vi)."
