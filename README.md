# LOAD TESTING 

## Installation 
1. install k6 - https://k6.io/docs/getting-started/installation/
2. run cmd for an example
```
k6 run --vus=10 --iterations=100 <path>
```

## MAC M1 Installation
1. try to install new homebrew for M1 (the homebrew bin placed at `/opt/homebrew/bin/brew`) 
see more - https://docs.brew.sh/Installation
2. for more easy to use `brew` command in M1 next time, try to make alias first at ~/.zshrc 
```
alias brew = /opt/homebrew/bin/brew

source ~/.zshrc
```
3. install k8
```
brew install k6
```
4. basicly k6 bin will placed at `/opt/homebrew/bin/k6` , then make alias first at ~/.zshrc
```
alias k6 = /opt/homebrew/bin/k6

source ~/.zshrc
```

## Details
get starter - https://k6.io/docs/getting-started/running-k6/
see k6 metrics here - https://k6.io/docs/using-k6/metrics/
thresold -  https://k6.io/docs/using-k6/thresholds/
